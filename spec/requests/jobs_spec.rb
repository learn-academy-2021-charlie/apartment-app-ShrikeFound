require 'rails_helper'

RSpec.describe 'Jobs', type: :request do
  # describe 'GET /index' do
  #   pending "add some examples (or delete) #{__FILE__}"
  # end

  describe 'POST /jobs' do
    it 'creates a job' do
      user_attrs = {
        email: 'job.seeker@email.com',
        password: 'learn_jobs_123',
        password_confirmation: 'learn_jobs_123',
      }

      status = Status.create(name: 'lead', priority: 1)
      user = User.create(user_attrs)
      sign_in user

      job_params = {
        job: {
          company: 'Terrier Tech',
          title: 'Software Engineer',
          city: 'San Diego',
          state: 'California',
          url: 'www.google.com',
          description:
            "this is where the job description would go. for now it's just this.",
          confidence_level: 5,
          status_id: status.id,
          salary: 6_000_000,
          is_remote: false,
          is_private: true,
          notes: "these are where I'd add my own personal notes about the job",
        },
      }

      post '/jobs', params: job_params
      job = Job.first

      expect(response).to have_http_status(200)
      expect(job.company).to eq("Terrier Tech")
    end
  end



    describe 'PATCH /jobs/:id' do
      it 'updates a job' do
        user_attrs = {
          email: 'job.seeker@email.com',
          password: 'learn_jobs_123',
          password_confirmation: 'learn_jobs_123',
        }

        status = Status.create(name: 'lead', priority: 1)
        user = User.create(user_attrs)
        sign_in user

        job_params = {
          job: {
            company: 'Terrier Tech',
            title: 'Software Engineer',
            city: 'San Diego',
            state: 'California',
            url: 'www.google.com',
            description:
              "this is where the job description would go. for now it's just this.",
            confidence_level: 5,
            status_id: status.id,
            salary: 6_000_000,
            is_remote: false,
            is_private: true,
            notes:
              "these are where I'd add my own personal notes about the job",
          },
        }

        job = user.jobs.create(job_params[:job])

        job_edit_params = {
          job: {
            title: "CEO"
          }
        }

        patch "/jobs/#{job.id}", params: job_edit_params

        edited_job = Job.first

        expect(response).to have_http_status(200)
        expect(edited_job.title).to eq("CEO")
      end
    end

    describe 'DELETE /jobs/:id' do 
      it "deletes a job" do 

        user_attrs = {
          email: 'job.seeker@email.com',
          password: 'learn_jobs_123',
          password_confirmation: 'learn_jobs_123',
        }

        status = Status.create(name: 'lead', priority: 1)
        user = User.create(user_attrs)
        sign_in user

        job_params = {
          job: {
            company: 'Terrier Tech',
            title: 'Software Engineer',
            city: 'San Diego',
            state: 'California',
            url: 'www.google.com',
            description:
              "this is where the job description would go. for now it's just this.",
            confidence_level: 5,
            status_id: status.id,
            salary: 6_000_000,
            is_remote: false,
            is_private: true,
            notes:
              "these are where I'd add my own personal notes about the job",
          },
        }

        job = user.jobs.create(job_params[:job])


        delete "/jobs/#{job.id}"
        
        expect(response).to have_http_status(200)

      end
    end



end
