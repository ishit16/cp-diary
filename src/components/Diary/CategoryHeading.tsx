import { cva } from "class-variance-authority";

interface CategoryHeadingProps {
  heading: string;
}

export const CategoryHeading = (props: CategoryHeadingProps) => {
  return (
    <div className="text-3xl font-bold text-category-heading font-category-heading">
      {props.heading}
    </div>
  );
};

const CategoryHeadingStyles = cva([
  "text-3xl",
  "font-bold",
  "text-category-heading",
  "font-category-heading",
]);
