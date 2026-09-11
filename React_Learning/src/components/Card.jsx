function Card({ title, description, color }) {
  return (
    <div className="bg-[#151c2c] rounded-xl p-6 border border-[#1e293b] hover:border-[#00C864] transition-all duration-300 shadow-md flex flex-col justify-between min-h-[140px]">
      <div className="m-6">
        <h3
          className="text-xl font-bold m-6"
          style={{ color: color || "#00C864" }}
        >
          &ensp;{title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">&ensp; &nbsp;{description}</p>
      </div>
    </div>
  );
}

export default Card;
