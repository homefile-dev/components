import { ReportsI } from '../../interfaces/homeBoard/FolderDetail.interface'
import { FolderI } from '../../interfaces/homeBoard/FolderSharing.interface'
import { SelectItemI } from '../../interfaces/inputs/Select.interface'

export const FoldersDB: FolderI[] = [
  {
    _id: '1',
    name: 'General',
    public: true,
    home: '1',
    icon: 'folder'
  },
  {
    _id: '2',
    name: 'Construction',
    public: true,
    home: '1',
    icon: 'project'
  },
  {
    _id: '3',
    name: 'Appliances',
    public: true,
    home: '1',
    icon: 'documents'
  },
  {
    _id: '4',
    name: 'Private',
    public: false,
    home: '1',
  },
  {
    _id: '5',
    name: 'Drawings',
    public: true,
    home: '1',
  },
  {
    _id: '6',
    name: 'Files',
    public: true,
    home: '1',
  },
]

export const selectOptions: SelectItemI[] = [
  {
    name: 'Shared',
    _id: '1',
  },
  {
    name: 'Unshared',
    _id: '2',
  },
  {
    name: 'New',
    _id: '3',
  },
]

export const fileDB: ReportsI[] = [
  {
    _id: '62aa4c6db225dd3957d09b26',
    user: '62388ab2a1a4a98e69942bb5',
    home: '62a20af1cc6d1000ef17c7d0',
    title: 'test-plans.jpeg',
    report: [],
    description: 'This is the file description',
    type: 'File',
    subType: 'image',
    needsReview: false,
    reviewed: false,
    images: [],
    status: 'completed',
    deleted: false,
    createdAt: '2022-06-15T21:17:33.246Z',
    updatedAt: '2022-06-15T21:17:33.246Z',
    __v: 0,
    file: {
      _id: '62aa4c6db225dd3957d09b24',
      fileName: 'test-plans.jpeg-37f8c3',
      extension: 'mov',
      originalName: 'test-plans.jpeg',
      bucketName: 'homefile-images',
      description: '',
      collectionName: 'homes',
      docId: '62a20af1cc6d1000ef17c7d0',
      createdAt: '2022-06-15T21:17:33.166Z',
      updatedAt: '2022-06-15T21:17:33.166Z',
      __v: 0,
    },
  },
  {
    _id: '62aa4c6db225dd3957d09b27',
    user: '62388ab2a1a4a98e69942bb5',
    home: '62a20af1cc6d1000ef17c7d0',
    title: 'a totally different title',
    report: [],
    description: 'This is the file description',
    type: 'File',
    subType: 'image',
    needsReview: false,
    reviewed: false,
    images: [],
    status: 'completed',
    deleted: false,
    createdAt: '2022-06-15T21:17:33.246Z',
    updatedAt: '2022-06-15T21:17:33.246Z',
    __v: 0,
    file: {
      _id: '62aa4c6db225dd3957d09b24',
      fileName: 'test-plans.jpeg-37f8c3',
      extension: 'jpeg',
      originalName: 'test-plans.jpeg',
      bucketName: 'homefile-images',
      description: '',
      collectionName: 'homes',
      docId: '62a20af1cc6d1000ef17c7d0',
      createdAt: '2022-06-15T21:17:33.166Z',
      updatedAt: '2022-06-15T21:17:33.166Z',
      __v: 0,
    },
  },
  {
    _id: '62b49071061c02d53850dec3',
    user: '62b3c96892d0bad2cc64c327',
    home: '62b3cc68061c02d53850ddb6',
    title: 'second home 6/23/2022',
    description: '',
    report: [
      {
        name: 'Weekly Update',
        description: '',
        comments: '',
        value: '',
        type: 'string',
      },
      {
        name: 'Two week look ahead',
        description: '',
        comments: '',
        value: '',
        type: 'string',
      },
      {
        name: 'Items outstanding/owner clarifications',
        description: '',
        comments: '',
        value: '',
        type: 'string',
      },
      {
        name: 'Milestone goals-per construction schedule',
        description: '',
        comments: '',
        value: '',
        type: 'string',
      },
      {
        name: 'Supply updates',
        description: '',
        comments: 'Can be used as placeholder or something else',
        value: '',
        type: 'string',
      },
      {
        name: 'Project manager comments',
        description: '',
        comments: '',
        value: '',
        type: 'string',
      },
    ],
    type: 'Construction',
    subType: 'image',
    needsReview: false,
    reviewed: false,
    images: [],
    status: 'new',
    deleted: false,
    createdAt: '2022-06-23T16:10:25.805Z',
    updatedAt: '2022-06-23T16:10:25.805Z',
    __v: 0,
  },
]
