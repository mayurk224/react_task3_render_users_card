import users from "../data.js";

const Card = ({ userIndex = 0 }) => {
  const user = users[userIndex];
  const stats = [
    { value: user.followers, label: "Followers" },
    { value: user.following, label: "Following" },
    { value: user.projects, label: "Projects" },
  ];
  const socialLinks = [
    { icon: "github", url: user.social.github },
    { icon: "linkedin", url: user.social.linkedin },
    { icon: "instagram", url: user.social.instagram },
  ];
  return (
    <div className="rounded-3xl bg-white shadow-xl max-w-xs h-auto border border-gray-100 transition-all duration-300 hover:shadow-2xl overflow-hidden">
      <div className="relative">
        <div
          className="bg-cover bg-center h-24 relative overflow-hidden"
          style={{ backgroundImage: `url(${user.coverPic})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          <button className="absolute right-3 top-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 flex items-center gap-1.5 shadow-lg hover:bg-blue-100 hover:text-black transition-all duration-300 text-xs font-semibold cursor-pointer group border border-gray-100">
            <span>Follow</span>
            <svg
              className="w-3 h-3 transition-transform group-hover:rotate-90 duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="absolute -bottom-8 left-4 flex items-end gap-2">
          <div
            className="rounded-full border-3 border-white h-16 w-16 bg-center bg-cover shadow-xl ring-2 ring-gray-100"
            style={{ backgroundImage: `url(${user.profilePic})` }}
          ></div>
          <div className="mb-1 flex gap-2">
            <div className="bg-white rounded-lg px-2 py-1 shadow-md border border-gray-100 flex items-center gap-1">
              <svg
                className="w-3 h-3 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-gray-700">
                {user.location}
              </span>
            </div>
            <div className="bg-white rounded-lg px-2 py-1 shadow-md border border-gray-100 flex items-center gap-1">
              <svg
                className="w-3 h-3 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <span className="text-xs font-medium text-gray-700">
                {user.experienceYr} yr
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-11 px-4 pb-3">
        <div className="mb-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <h1 className="text-lg font-bold text-gray-900 leading-tight">
              {user.name}
            </h1>
            {user.isVerified && (
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-2.5 py-0.5">
            <p className="text-xs font-semibold text-blue-700">
              {user.profession}
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {user.bio}
        </p>
      </div>

      <div className="mb-3 px-4">
        <div className="flex items-center rounded-2xl p-3 w-full bg-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="w-full">
              <div className="text-center flex-1">
                <h1 className="text-base font-bold text-gray-900 mb-0.5">
                  {stat.value}
                </h1>
                <p className="text-gray-500 text-xs font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 px-4 pb-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group hover:border-transparent"
          >
            <img
              width="18"
              height="18"
              src={`https://img.icons8.com/${link.icon}`}
              alt="social"
              className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:brightness-0"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
