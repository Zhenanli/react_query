import React, { useState } from 'react';
import ModelGroupRepoTable from './ModelGroupRepoTable';
import { gql, useQuery } from '@apollo/client';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
} from '@carbon/react';

const MODEL_GROUP_REPO_QUERY = gql`
  query MODEL_GROUP_REPO_QUERY {
     {
      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          url
          homepageUrl
          issues(filterBy: { states: OPEN }) {
            totalCount
          }
          stargazers {
            totalCount
          }
          releases(first: 1) {
            totalCount
            nodes {
              name
            }
          }
          name
          updatedAt
          createdAt
          description
          id
        }
      }
    }
  }
`;

const headers = [
  {
    key: 'modelGroupName',
    header: 'ModelGroupName',
  },
  {
    key: 'createdDate',
    header: 'CreatedDate',
  },
  {
    key: 'savedBy',
    header: 'SavedBy',
  },
  {
    key: 'openModelGroup',
    header: 'Open Model Group',
  },
  {
    key: 'editModelGroup',
    header: 'Edit Model Group',
  },
  {
    key: 'deleteModelGroup',
    header: 'Delete Model Group',
  },
];

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    stars: row.stargazers.totalCount,
    issueCount: row.issues.totalCount,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
  }));

const ModelGroupRepoPage = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const { loading, error, data } = useQuery(MODEL_GROUP_REPO_QUERY);

  if (loading) {
    return (
      <Grid className="model-group-repo-page">
        <Column lg={16} md={8} sm={4} className="repo-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  if (data) {
    // If we're here, we've got our data!
    const { repositories } = data.organization;
    const rows = getRowItems(repositories.nodes);

    return (
      <Grid className="model-group-repo-page">
        <Column lg={16} md={8} sm={4} className="model-group-repo-page__r1">
          <ModelGroupRepoTable
            headers={headers}
            rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
          />
          <Pagination
            totalItems={repositories.totalCount}
            backwardText="Previous page"
            forwardText="Next page"
            pageSize={currentPageSize}
            pageSizes={[5, 10, 15, 25]}
            itemsPerPageText="Items per page"
            onChange={({ page, pageSize }) => {
              if (pageSize !== currentPageSize) {
                setCurrentPageSize(pageSize);
              }
              setFirstRowIndex(pageSize * (page - 1));
            }}
          />
        </Column>
      </Grid>
    );
  }
};

export default ModelGroupRepoPage;
