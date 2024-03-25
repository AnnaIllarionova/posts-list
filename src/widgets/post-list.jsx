import { List, AutoSizer } from "react-virtualized";
import { Link } from "react-router-dom";

export const PostList = ({ todosData, textRef }) => {
  return (
    <div className="list">
      <AutoSizer>
        {({ width, height }) => (
          <List
            height={height}
            width={width}
            rowHeight={100}
            rowCount={todosData?.length}
            rowRenderer={({ key, index, style }) => {
              const todo = todosData && todosData[index];
              const textWidth = textRef.current[index]?.scrollWidth;
              const clientWidth = textRef.current[index]?.clientWidth;
              const visibility = textWidth > clientWidth;

              return (
                <div key={key} style={style} className="item">
                  <div className="item__title">
                    <h3 className="item__title_id">{todo?.id}.</h3>
                    <p className="item__title_text">{todo?.title}</p>
                  </div>
                  <div className="item__description">
                    <p
                      className="item__description_text"
                      ref={(el) => (textRef.current[index] = el)}
                    >
                      {todo?.body}
                    </p>

                    {visibility ? (
                      <Link to={`/post/${todo.id}`}>
                        <button className="item__description_button">
                          Просмотр
                        </button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};
