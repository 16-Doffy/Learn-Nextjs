// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const PlayerRow = ({ index, player }) => (
//   <>
//     <div className="p-2">{index + 1}</div>
//     <div className="flex items-center justify-center">
//       {player.name} <Image src={player.icon} alt={player.name} width={20} height={20} className="ml-1" />
//     </div>
//     <div className="p-2">
//       {player.rank} 
//       {Array(player.stars).fill().map((_, i) => (
//         <FontAwesomeIcon key={i} icon={faStar} className="ml-1 text-yellow-500" />
//       ))}
//     </div>
//     <div className="p-2">
//       {player.kda.toFixed(1)} <FontAwesomeIcon icon={faCoins} className="ml-1 text-yellow-600" />
//     </div>
//   </>
// );