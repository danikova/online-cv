export default function BaseSection({ icon: Icon, title, children, ...props }) {
  return (
    <div
      {...props}
      className={`break-inside-avoid ${props.className ? props.className : ""}`}
    >
      <div className="flex items-center mb-8">
        <Icon className="mr-8 text-[25px]" />
        <h3 className="text-2xl">{title}</h3>
      </div>
      <data>{children}</data>
    </div>
  );
}
