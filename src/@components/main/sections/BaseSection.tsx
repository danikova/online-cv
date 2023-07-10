export default function BaseSection(
  { icon: Icon, title, children, pageBreak = false, ...props }
) {
  return (
    <div {...props}>
      <caption className='flex items-center mb-8'>
        <Icon className="mr-8" />
        <h3 className='text-2xl'>
          {title}
        </h3>
      </caption>
      <data>
        {children}
      </data>
    </div>
  );
}
