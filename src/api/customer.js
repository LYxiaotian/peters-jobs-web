import request from "@/utils/request";

const base_uri = '/custom'
export const getCustomerPage = (customRequest) => {
  return request({
    url: `${base_uri}`,
    method: "post",
    data: customRequest
  });
};