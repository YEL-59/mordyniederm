function TransportationCard({data}) {
  const { name, distance, walk, drive } = data;
  console.log(name)
  return (
    <div className="p-4 flex flex-col items-center gap-6 rounded-[8px] border border-[#E9E9E9]">
      <div className="flex flex-col items-center gap-1 justify-between">
        <h1 className="text-[#10423E] text-lg font-medium text-center">
          {name}
        </h1>
        <p className="text-base text-[#8A8787] shrink-0">
          Distance: <span className="text-[#10423E] font-medium">{distance}</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-base text-[#8A8787] shrink-0">
          Walk: <span className="text-[#10423E] font-medium">{walk}</span>
        </p>
        <p className="text-base text-[#8A8787]  shrink-0">
          Drive: <span className="text-[#10423E] font-medium">{drive}</span>
        </p>
      </div>
    </div>
  );
}

export default TransportationCard;
