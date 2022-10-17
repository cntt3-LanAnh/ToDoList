import { assignDataToInstance } from 'utilities/helper';

export class RecentlyAssignedJobsReqDto {
  date: string;

  constructor(data?: Partial<RecentlyAssignedJobsReqDto>) {
    assignDataToInstance(data, this);
  }
}
