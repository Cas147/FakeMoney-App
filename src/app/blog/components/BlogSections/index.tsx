import { BlogPost } from "../../interfaces/blog";

const SectionComponent: React.FC<{ section: BlogPost["sections"][0] }> = ({
  section,
}) => {
  return (
    <div className="mt-8">
      <p
        id={section.title.toLowerCase().replace(/\s+/g, "-")}
        className="text-xl md:text-2xl text-white font-bold my-4"
      >
        {section.title}
      </p>
      <div className="my-6">
        <p className="text-white">{section.content}</p>
        {section.imageUrl && (
          <img src={section.imageUrl} alt={section.title} className="mt-4" />
        )}
      </div>
    </div>
  );
};

export default SectionComponent;
