const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-sm font-medium text-gray-600">Static</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white
          peer dark:bg-gray-700 
          peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-[3px] after:left-[3px] 
          after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 
          after:transition-all peer-checked:bg-purple-900">
        </div>
      </label>
      <span className="text-sm font-medium text-gray-600">Interactive</span>
    </div>
  );
};

export default ToggleSwitch;
