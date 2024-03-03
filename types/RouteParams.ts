export interface RouteParams {
  params: { id: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}
