import { NamedAPIResource } from "pokeapi-js-wrapper";
import React from "react";
import { extractId } from "../utilities";
import Link from "next/link";

export default function Dash({
  data,
  page,
  pageSize,
}: {
  data: NamedAPIResource[];
  page: number;
  pageSize: number;
}) {
  return (
    <React.Fragment>
      <div className="flex flex-row">
        <span className="p-1 flex-1">Name</span>
        <span className="p-1">ID</span>
      </div>
      {data.slice(page * pageSize, page * pageSize + pageSize).map((v, i) => {
        const [match, id] = v.url.match(extractId) || [];

        return (
          <Link href={id ? `/pokemon/${id}` : "/"} key={i}>
            <div className="flex " key={i}>
              <span className="p-1 flex-1">{v.name}</span>
              {id && <span className="p-1">{id}</span>}
            </div>
          </Link>
        );
      })}
    </React.Fragment>
  );
}
