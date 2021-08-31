
##creating test user

user_attrs = {
  email: "job.seeker@email.com",
  password: "learn_jobs_123",
  password_confirmation: "learn_jobs_123"
}


new_user = User.find_by(email:"job.seeker@email.com")

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
    salary: 6000000,
    is_remote: false,
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
    salary: 6500000,
    is_remote: true,
    notes: "these are where I'd add my own personal notes about the job"
  }
]

jobs.each do |j|
  puts "creating new job: #{j[:title]} at #{j[:company]}"
  new_job = new_user.jobs.new(j)
  
  if new_job.save 
    puts "job created."
  else
    puts "error: #{new_job.errors.full_messages}"
  end

end


