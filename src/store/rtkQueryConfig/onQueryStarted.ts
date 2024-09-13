import { Dispatch } from "redux";
import get from "lodash/get";
import { notifierActions } from "../reducers/notifier";

interface IWithErrorProps {
  dispatch: Dispatch;
  queryFulfilled: Promise<any>;
}

async function withError({ dispatch, queryFulfilled }: IWithErrorProps) {
  try {
    const { data } = await queryFulfilled;
    return data;
  } catch (err) {
    const errorMessage = get(
      err,
      "error.data.detail",
      "Something went wrong, try again"
    );

    dispatch(
      notifierActions.notifyError(
        typeof errorMessage === "string"
          ? errorMessage
          : "Something went wrong, try again"
      )
    );
  }
  return null;
}

export const onQueryStarted = async (
  _: any,
  { dispatch, queryFulfilled }: any
) => {
  //TODO: implement onSuccess()
  await withError({ dispatch, queryFulfilled });
};