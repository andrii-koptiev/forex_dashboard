export interface RouteParams {
  params: { id: string };
  searchParams?: {
    pageSize?: string;
    query?: string;
    page?: string;
    sortBy?: string;
    sortOrder?: string;
  };
}
