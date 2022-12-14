import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IProductListUiProps {
  data?: Pick<IQuery, "fetchUseditems">;
  infiniteFun: () => void;
  onClickToWrite: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
