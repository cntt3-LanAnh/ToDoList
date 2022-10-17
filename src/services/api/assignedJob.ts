import { APIConfig } from 'types/api';

export const recentlyAssignedJobs: APIConfig = {
  endPoint: '/api/job/job_assigned_by_staff',
  keys: ['job_assigned_by_staff'],
  method: 'GET',
};
