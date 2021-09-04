##creating statuses for jobs
#leads are job ads that we have no applied to yet: no resume sent, no contact made.
# applied are jobs we've sent a resume / covelretter to but have not interviewed with.
# interviewed jobs are jobs we have interviewed with
# offers are jobs we've received offers on.
# rejecteds are jobs we've been rejected form.
statuses = [
  {name: "lead",priority: 4},
  {name: "applied",priority: 3},
  {name: "interviewed",priority: 2},
  {name: "offered",priority: 1},
  {name: "rejected",priority: 0},
]

#DESTROY ALL JOBS AND STATUSES
Job.destroy_all
Status.destroy_all

puts "======================"
puts "===Creating Statuses=="
puts "======================"

statuses.each do |status_attrs|
  new_status = Status.new(status_attrs)
  
  if new_status.save 
    puts "status '#{status_attrs[:name]}' created"
  else
    puts new_status.errors.full_messages
    puts

  end

  end

##creating test user

user_attrs = {
  email: "job.seeker@email.com",
  password: "learn_jobs_123",
  password_confirmation: "learn_jobs_123"
}


new_user = User.find_by(email:"job.seeker@email.com")
puts "======================"
puts "=====Creating User===="
puts "======================"
#only try to create new user if test user doesn't already exists
if !new_user 

  new_user = User.new(user_attrs)
  if new_user.save 
    puts "saving..."
    puts "new user created: '#{new_user.email}'"
  else
    puts "failed to created user: #{new_user.errors.full_messages}"
  end


else


  puts "Test user already exists. skipping user creation..."
  
end

## creating jobs

jobs = [
  {
    company: "Terrier Tech",
    title: "Software Engineer",
    city: "San Diego",
    state: "California",
    url: "www.google.com",
    description: "this is where the job description would go. for now it's just this.",
    confidence_level: 5,
    salary: 60000,
    is_remote: false,
    is_private: true,
    notes: "these are where I'd add my own personal notes about the job"
  },
  {
    company: "Notch 8",
    title: "Software Developer",
    city: "San Diego",
    state: "California",
    url: "www.google.com",
    description: "this is where the job description would go. for now it's just this.",
    confidence_level: 2,
    salary: 65000,
    is_remote: true,
    is_private: true,
    notes: "these are where I'd add my own personal notes about the job"
  },
  {
    company: "Kickback",
    title: "Software Intern",
    city: "San Diego",
    state: "California",
    url: "www.google.com",
    description: "this is where the job description would go. for now it's just this.",
    confidence_level: 2,
    salary: 0,
    is_remote: true,
    is_private: false,
    notes: "these are where I'd add my own personal notes about the job"
  },
  {
    company: "The Beehive Software",
    title: "Developer Intern",
    city: "San Diego",
    state: "California",
    url: "www.google.com",
    description: "this is where the job description would go. for now it's just this.",
    confidence_level: 2,
    salary: 40000,
    is_remote: true,
    is_private: false,
    notes: "these are where I'd add my own personal notes about the job"
  }
]

puts "======================"
puts "==== Creating Jobs ==="
puts "======================"

#MAKE 'EM
jobs.each_with_index do |j,index|
  puts "creating new job: #{j[:title]} at #{j[:company]}"
  new_job = new_user.jobs.new(j)
  if new_job.save 
  if index % 2 === 0 
    new_job.status = Status.find_by(name: "applied")
    new_job.save
  end
    puts "job created."
  else
    puts "error: #{new_job.errors.full_messages}"
  end

end


