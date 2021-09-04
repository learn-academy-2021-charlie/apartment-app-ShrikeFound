require 'rails_helper'

RSpec.describe Job, type: :model do

  
  before(:all) do
    #create a user and a "lead" status to use when creating jobs  
    user_attrs = {
      email: 'job.seeker@email.com',
      password: 'learn_jobs_123',
      password_confirmation: 'learn_jobs_123',
    }

    @user = User.create user_attrs
    
    #don't actually need to save it to a variable just, but just in case we need it later
    @lead = Status.create(name: "lead",priority: 1)

    #job attributes we can use for each test
    @job_attrs = {
      company: 'Terrier Tech',
      title: 'Software Engineer',
      city: 'San Diego',
      state: 'California',
      url: 'www.google.com',
      description:
        "this is where the job description would go.",
      confidence_level: 5,
      salary: 6_000_000,
      is_remote: false,
      is_private: true,
      notes: "these are where I'd add",
    }
  end




  it 'cannot be created without an associated user' do

    job = Job.create @job_attrs
    expect(job.errors).to_not be_empty
  end

  it 'can be created without explicitly choosing an associated status' do

    job = @user.jobs.new @job_attrs
    job.save
    expect(Job.count).to eq 1

  end

  it 'cannot be created without a company name' do 
    job = @user.jobs.new @job_attrs
    job.company = nil
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot be created without a title' do 
    job = @user.jobs.new @job_attrs
    job.title = nil
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot have a company name with less than 3 characters' do 
    job = @user.jobs.new @job_attrs
    job.company = "aa"
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot have a title with less than 3 characters' do 
    job = @user.jobs.new @job_attrs
    job.title = "aa"
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot have a company with more than 20 characters' do 
    job = @user.jobs.new @job_attrs
    job.company = "12345678910111213141516181920"
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot have a title with more than 20 characters' do 
    job = @user.jobs.new @job_attrs
    job.title = "12345678910111213141516181920"
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot have an is_remote field that is nil' do 
    job = @user.jobs.new @job_attrs
    job.is_remote = nil
    job.save 
    expect(job.errors).to_not be_empty
  end

  it 'cannot have an is_private field that is nil' do 
    job = @user.jobs.new @job_attrs
    job.is_private = nil
    job.save 
    expect(job.errors).to_not be_empty
  end


  
















end
