import moment from "moment";

export const renderTime = (dateUpdated) => {
  if (moment().diff(moment(dateUpdated), "years") > 1) {
    return `${moment().diff(moment(dateUpdated), "years")} years`;
  } else if (moment().diff(moment(dateUpdated), "years") === 1) {
    return `${moment().diff(moment(dateUpdated), "years")} year`;
  } else if (
    moment().diff(moment(dateUpdated), "years") < 1 &&
    moment().diff(moment(dateUpdated), "months") > 1
  ) {
    return `${moment().diff(moment(dateUpdated), "months")} months`;
  } else if (moment().diff(moment(dateUpdated), "months") === 1) {
    return `${moment().diff(moment(dateUpdated), "months")} month`;
  } else if (
    moment().diff(moment(dateUpdated), "months") < 1 &&
    moment().diff(moment(dateUpdated), "days") > 1
  ) {
    return `${moment().diff(moment(dateUpdated), "days")} days`;
  } else if (moment().diff(moment(dateUpdated), "days") === 1) {
    return `${moment().diff(moment(dateUpdated), "days")} day`;
  }
};
