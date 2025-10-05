import { useSatellites } from "../context/SatellitesContext";

export function Satellites() {
  const { satellites, removeSatellite } = useSatellites();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Satellite List</h1>
      {satellites.length === 0 ? (
        <p>No satellites registered.</p>
      ) : (
        <ul className="space-y-4">
          {satellites.map((satellite) => (
            <li key={satellite.name} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p><strong>Name:</strong> {satellite.name}</p>
                <p><strong>Size:</strong> {satellite.size} m</p>
                <p><strong>Country:</strong> {satellite.country}</p>
              </div>
              <button
                onClick={() => removeSatellite(satellite.name)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
