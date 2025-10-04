import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://backend-new-originn.vercel.app";

type FounderType = {
  name: string;
  designation: string;
  institution: string;
  description: string;
  photo?: string;
  _id: string;
};

type TeamMemberType = {
  name: string;
  designation: string;
  institution: string;
  photo?: string;
  _id: string;
};

type LinksType = {
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
};

type StartupData = {
  _id: string;
  startupId: string;
  category: string;
  description: string;
  coverPhoto?: string;
  logo?: string;
  status: string;
  businessRegistrationNo: string;
  founderDetails: FounderType[];
  teamDetails: TeamMemberType[];
  links: LinksType;
};

const StartupProfile = () => {
  const { id } = useParams();
  const [startup, setStartup] = useState<StartupData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/company/${id}`);
        const data = await res.json();
        console.log("individual data", data);
        setStartup(data);
      } catch (err) {
        console.error("Error fetching startup:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStartup();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!startup) return <p className="text-center py-10">Startup not found</p>;

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {startup.coverPhoto && (
        <div className="w-full h-64 mb-8 overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/34155605/pexels-photo-34155605.jpeg"
            alt="Cover Photo"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center gap-6">
        {startup.logo && (
          <img
            src="https://images.pexels.com/photos/34155605/pexels-photo-34155605.jpeg"
            alt="Logo"
            className="w-20 h-20 object-cover rounded-xl"
          />
        )}
        <h1 className="text-4xl font-bold">{startup.startupId}</h1>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p>{startup.description}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Category</h2>
        <p>{startup.category}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Status</h2>
        <p className="capitalize">{startup.status}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Founders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {startup.founderDetails?.map((founder) => (
            <div key={founder._id} className="border p-4 rounded-xl shadow">
              <img
                src={founder.photo || "https://placehold.co/150x150"}
                alt={founder.name}
                className="w-20 h-20 object-cover rounded-full mb-3"
              />
              <h3 className="font-bold">{founder.name}</h3>
              <p className="text-sm">{founder.designation}</p>
              <p className="text-sm text-gray-600">{founder.institution}</p>
              <p className="text-sm mt-2">{founder.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startup.teamDetails?.map((member) => (
            <div key={member._id} className="border p-4 rounded-xl shadow">
              <img
                src={member.photo || "https://placehold.co/150x150"}
                alt={member.name}
                className="w-20 h-20 object-cover rounded-full mb-3"
              />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm">{member.designation}</p>
              <p className="text-sm text-gray-600">{member.institution}</p>
            </div>
          ))}
        </div>
      </section>

      {startup.links && (
        <section>
          <h2 className="text-2xl font-semibold mb-3">Links</h2>
          <ul className="list-disc pl-6 text-blue-600">
            {startup.links.instagram && (
              <li>
                <a href={startup.links.instagram} target="_blank">
                  Instagram
                </a>
              </li>
            )}
            {startup.links.linkedin && (
              <li>
                <a href={startup.links.linkedin} target="_blank">
                  LinkedIn
                </a>
              </li>
            )}
            {startup.links.twitter && (
              <li>
                <a href={startup.links.twitter} target="_blank">
                  Twitter
                </a>
              </li>
            )}
            {startup.links.youtube && (
              <li>
                <a href={startup.links.youtube} target="_blank">
                  YouTube
                </a>
              </li>
            )}
          </ul>
        </section>
      )}
    </div>
  );
};

export default StartupProfile;
