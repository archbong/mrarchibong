import Card from "../Card";
import Subtitle from "../typography/subtitle/Subtitle";
import getTopTracks from "@/lib/sportify";

export default async function FavouriteJams() {
  const topTracks = await getTopTracks();
  console.log(
    topTracks?.map(
      ({ name, artists }) =>
        `${name} by ${artists.map((artist) => artist.name).join(", ")}`
    )
  );

  return (
    <Card>
      <div>
        <div>
          <Subtitle className="p-5">favourite jams</Subtitle>
          <Card classname="h-24">
            <div className="flex space-x-2 gap-y-2 p-2">
              <div className="skeleton h-20 w-20"></div>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="skeleton h-4 w-48"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <button>
                    <div className="badge badge-ghost uppercase p-3">
                      preview
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Card>
          <Card classname="h-24">
            <div className="flex space-x-2 gap-y-2 p-2">
              <div className="skeleton h-20 w-20"></div>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="skeleton h-4 w-48"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <button>
                    <div className="badge badge-ghost uppercase p-3">
                      preview
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Card>
          <Card classname="h-24">
            <div className="flex space-x-2 gap-y-2 p-2">
              <div className="skeleton h-20 w-20"></div>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="skeleton h-4 w-48"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <button>
                    <div className="badge badge-ghost uppercase p-3">
                      preview
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}
