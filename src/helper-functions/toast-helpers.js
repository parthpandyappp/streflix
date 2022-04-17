import toast from "react-hot-toast";

const toastStyle = {
    backgroundColor: "#FF5678",
    border: "2px solid black",
    padding: "16px",
    color: "white",
}
const notifyWatchLater = () =>
    toast(
        (t) => (
            <span>
                <b>Added to Watch Later</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyLiked = () =>
    toast(
        (t) => (
            <span>
                <b>Added to Liked Videos</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemoveWatchLater = () =>
    toast(
        (t) => (
            <span>
                <b>Removed from Watch Later</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemoveLiked = () =>
    toast(
        (t) => (
            <span>
                <b>Removed from Liked Videos</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyPlaylistCreated = () =>
    toast(
        (t) => (
            <span>
                <b>Playlist created</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyAddedToPlaylist = () =>
    toast(
        (t) => (
            <span>
                <b>Video added to the Playlist</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemoveFromPlaylist = () =>
    toast(
        (t) => (
            <span>
                <b>Video removed from the Playlist</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemovePlaylist = () =>
    toast(
        (t) => (
            <span>
                <b>Playlist Deleted</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyClearHistory = () =>
    toast(
        (t) => (
            <span>
                <b>Watch history cleared.</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyClearFromHistory = () =>
    toast(
        (t) => (
            <span>
                <b>Video removed from History records</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

export { notifyWatchLater, notifyAddedToPlaylist, notifyClearFromHistory, notifyClearHistory, notifyLiked, notifyPlaylistCreated, notifyRemoveFromPlaylist, notifyRemoveLiked, notifyRemovePlaylist, notifyRemoveWatchLater };