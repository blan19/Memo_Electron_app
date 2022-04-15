interface SelectType {
  allDay: boolean;
  start: string;
  end: string;
}

interface IStrapiEvent {
  title: string;
  start: string;
  end?: string | null;
}

interface IStrapiResData {
  id: number;
  attributes: IStrapiEvent;
}

interface IStrapiResMeta {
  pagination: {
    page: number;
  };
}

interface IStrapiRes {
  data: IStrapiResData[];
  meta: IStrapiResMeta;
}

export { SelectType, IStrapiEvent, IStrapiResData, IStrapiRes, IStrapiResMeta };
