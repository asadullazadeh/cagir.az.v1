export const Faq = () => {
  return (
    <div className="space-y-4">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium text-gray-900">
            Temizilik xidmetine temizlik vasiteleri ve avadanliq daxildir?
          </h2>
        </summary>

        <p className="px-4 mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium text-gray-900">
            Gundelik temizliye pencerelerin yuyulmasi daxildir?
          </h2>
        </summary>

        <p className="px-4 mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium text-gray-900">
            Cagir.az'in diger sirketlerden ferqi nedir?
          </h2>
        </summary>

        <p className="px-4 mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </div>
  );
};
