

import {Pagination} from "@heroui/react";
import {useState} from "react";

export function PaginationBasic(props) {
  const [page, setPage] = useState(1);
  const totalPages = props.pageAmount;
  const activeClass = "bg-amber-600 text-accent-foreground hover:bg-amber-600-hover";
  const linkClass = "text-muted hover:bg-surface hover:text-foreground";

  return (
    <Pagination className="justify-center font-bold">
      <Pagination.Content className="m-4">
        <Pagination.Item>
          <Pagination.Previous onClick={()=>props.setloaded(true)} isDisabled={props.pagenum === 1} onPress={() => {props.updatePage((p) => p - 1),  props.setloaded(true)}}>
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        {Array.from({length: totalPages}, (_, i) => i + 1).map((p) => (
          <Pagination.Item key={p} className="font-bold">
            <Pagination.Link  isActive={p === props.pagenum} onPress={() =>{ props.updatePage(p),  props.setloaded(true)}} className={p === props.pagenum ? activeClass : linkClass}>
              {p}
            </Pagination.Link>
          </Pagination.Item>
        ))}
        <Pagination.Item>
          <Pagination.Next  isDisabled={page === totalPages} onPress={() => {props.updatePage((p) => p + 1),  props.setloaded(true)}}>
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}

export default PaginationBasic;