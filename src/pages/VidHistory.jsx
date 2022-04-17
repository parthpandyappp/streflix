import { Link } from "react-router-dom";
import { SideNav } from "../components";
import { Toaster } from "react-hot-toast";
import { useGenericData } from "../contexts";
import {
  removeFromHistory,
  removeAllFromHistory,
  notifyClearHistory,
  notifyClearFromHistory,
} from "../helper-functions";

function VidHistory() {
  const { state, boolFunc } = useGenericData();
  return (
    <div>
      <div className="main-container">
        <SideNav />
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="main-content">
          <div className="center-hv">
            <h1 className="main-title">
              <span>
                <img
                  className="logo"
                  src="https://img.icons8.com/ios/50/000000/retro-tv.png"
                  alt="logo"
                />
              </span>
              /<span className="title-empha">Stre</span>Flix
            </h1>
            {state.watchHistory.length > 0 ? (
              <div>
                <table>
                  <tr>
                    <th>Sr.no</th>
                    <th>Title</th>
                    <th>Creator</th>
                    <th className="mid-ver">
                      Clear{" "}
                      <button
                        className="clr-all"
                        onClick={() =>
                          removeAllFromHistory(boolFunc, notifyClearHistory)
                        }
                      >
                        Clear all
                      </button>
                    </th>
                  </tr>
                  {state.watchHistory.map((video, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <Link
                            to={`/video/${video._id}`}
                            className="vidurl-link"
                          >
                            {video.title}
                          </Link>
                        </td>
                        <td>{video.creator}</td>
                        <td className="txt-center">
                          <img
                            onClick={() =>
                              removeFromHistory(
                                video._id,
                                boolFunc,
                                notifyClearFromHistory
                              )
                            }
                            className="sm-icon"
                            src="https://img.icons8.com/ios/50/000000/delete--v1.png"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
              <div>
                <img
                  className="empty-data"
                  src="https://i.ibb.co/98YTd6W/watch-later.png"
                  alt="watch-later"
                  border="0"
                ></img>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VidHistory };
