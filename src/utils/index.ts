import { IBlog } from "@/types";

export const currentDataWTime = () => {
  return new Date(Date.now()).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const sortingOnDate = (dataArray: string): IBlog[] => {
  const tempData: IBlog[] = JSON.parse(dataArray);
  tempData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  return tempData;
};

export const contentSlicer = (content: string, limit: number) => {
  return content.length > limit
    ? content.slice(0, limit).concat("...")
    : content;
};
