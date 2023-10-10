import { dateSort } from "./sortArrayDate";

export const convertDataWithUserToUserImgArray = (
  data: any,
  userEmail: string,
) => {
  const filterData = data.filter((el: any) => el.id === userEmail);

  if (filterData.length > 0) {
    const imagesForUser: any = Object.entries(filterData[0])
      .map((el: any) => {
        return {
          id: el[0],
          email: el[1].email,
          image: el[1].image,
          datePublication: el[1].datePublication,
        };
      })
      .filter(el => el.email !== undefined);

    const sortedImagesForUserArray = imagesForUser.sort(dateSort);
    return sortedImagesForUserArray;
  }
  return [];
};
