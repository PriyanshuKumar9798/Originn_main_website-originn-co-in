// AllProducts.tsx
"use client";
import React from "react";

interface Founder {
  name: string;
  designation: string;
  institution: string;
  photo?: string | null;
}

interface TeamMember {
  name: string;
  designation: string;
  institution: string;
  photo?: string | null;
}

interface Product {
  _id: string;
  companyName: string;
  registrationNo: string;
  website?: string;
  category?: string;
  productType?: string;
  description?: string;
  logo?: string | null;
  coverPhoto?: string | null;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  founders: Founder[];
  team?: TeamMember[];
  status?: string;
}

interface Props {
  products: Product[];
}

const AllProducts: React.FC<Props> = ({ products }) => {
  if (!products.length) return <div>No startups available.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
        >
          {/* Cover Photo */}
          <div className="h-48 bg-gray-200">
            {product.coverPhoto ? (
              <img
                src={product.coverPhoto}
                alt={product.companyName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Cover
              </div>
            )}
          </div>

          <div className="p-6">
            {/* Logo and Name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {product.logo ? (
                  <img
                    src={product.logo}
                    alt={product.companyName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Logo</span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold">{product.companyName}</h2>
                <p className="text-sm text-gray-500">{product.category || "Unknown"}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            {/* Founders */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Founders</h3>
              <ul className="text-gray-600 text-sm">
                {product.founders.map((founder, idx) => (
                  <li key={idx}>
                    {founder.name} - {founder.designation} ({founder.institution})
                  </li>
                ))}
              </ul>
            </div>

            {/* Status and Links */}
            <div className="flex items-center justify-between mt-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : product.status === "rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {product.status || "Pending"}
              </span>
              <div className="flex gap-2">
                {product.website && (
                  <a
                    href={product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Website
                  </a>
                )}
                {product.linkedin && (
                  <a
                    href={product.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
