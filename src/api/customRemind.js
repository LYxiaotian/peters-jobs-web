import request from "@/utils/request";

const base_uri = '/custom_remind'

export const getCustomRemindPage = (customRequest) => {
  return request({
    url: `${base_uri}`,
    method: "post",
    data: customRequest
  });
};