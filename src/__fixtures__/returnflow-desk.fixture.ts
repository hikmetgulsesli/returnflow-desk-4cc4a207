export type ReturnflowRecordStatus = 'triage' | 'inspection' | 'resolved';

export interface ReturnflowRecord {
  id: string;
  customer: string;
  sku: string;
  reason: string;
  status: ReturnflowRecordStatus;
  priority: 'standard' | 'elevated' | 'urgent';
  updatedAt: string;
}

export const returnflowDeskFixture: ReturnflowRecord[] = [
  {
    id: 'RET-1027',
    customer: 'Marin Outdoor Supply',
    sku: 'RF-BOOT-42',
    reason: 'Wrong size received',
    status: 'triage',
    priority: 'urgent',
    updatedAt: '2026-05-25T07:30:00.000Z',
  },
  {
    id: 'RET-1038',
    customer: 'Northstar Studio',
    sku: 'RF-LAMP-11',
    reason: 'Damaged packaging',
    status: 'inspection',
    priority: 'elevated',
    updatedAt: '2026-05-24T16:45:00.000Z',
  },
  {
    id: 'RET-1041',
    customer: 'Aster Goods',
    sku: 'RF-BAG-09',
    reason: 'Carrier scan mismatch',
    status: 'resolved',
    priority: 'standard',
    updatedAt: '2026-05-23T12:10:00.000Z',
  },
];
