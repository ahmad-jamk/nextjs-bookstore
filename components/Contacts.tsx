import Link from "next/link";
import React from "react";

const Contacts: React.FC<{}> = () => {
  const contacts = [
    { name: "Awsaf uz zaman Ahmad", email: "ae9951@student.jamk.fi" },
    { name: "Fedor Vlasov", email: "ad9348@student.jamk.fi" },
    { name: "Mohajer Koohestani Ehsan", email: "ae9190@student.jamk.fi" },
    { name: "Md Nayeem Hasan Khan", email: "ae9200@student.jamk.fi" },
  ];

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="px-4 md:px-12 py-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Team:</strong>
          {contacts && (
            <p>
              {contacts.map((contact, index) => (
                <div key={index}>
                  <Link
                    className="cursor-pointer"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.name}
                  </Link>
                  <br />
                </div>
              ))}
            </p>
          )}
        </p>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Course:</strong> Modern Software development - Frontend
        </p>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          <strong>Stack:</strong> Next.js + Typescript + MongoDB
        </p>
      </div>
    </div>
  );
};

export default Contacts;
