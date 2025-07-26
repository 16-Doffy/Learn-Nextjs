// 'use client'
// import { useState } from 'react';
// interface Props {
//   agents: Record<string, agent>; // Hoặc kiểu dữ liệu cụ thể của bạn
// }
// export default function AgentComparison({ agent }: Props)  {
//   const [selectedAgents, setSelectedAgents] = useState<string[]>(['1', '2']);

//   const handleSelectAgent = (slot: number, id: string) => {
//     const updated = [...selectedAgents];
//     updated[slot] = id;
//     setSelectedAgents(updated);
//   };

//   return (
//     <div className="p-6 bg-gray-800 rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Agent Comparison</h2>
      
//       {/* Agent Selection */}
//       <div className="flex gap-4 justify-center mb-8">
//         {[0, 1].map((slot) => (
//           <select
//             key={slot}
//             value={selectedAgents[slot]}
//             onChange={(e) => handleSelectAgent(slot, e.target.value)}
//             className="bg-gray-700 text-white p-2 rounded"
//           >
//             {Object.entries(agents).map(([id, agent]) => (
//               <option key={id} value={id}>
//                 {agent.name}
//               </option>
//             ))}
//           </select>
//         ))}
//       </div>

//       {/* Stats Comparison */}
//       <div className="grid gap-6">
//         {['damage', 'mobility', 'utility', 'difficulty'].map((stat) => (
//           <div key={stat}>
//             <h3 className="capitalize mb-2">{stat}</h3>
//             <div className="flex items-center gap-4">
//               {selectedAgents.map((id) => (
//                 <div key={`${id}-${stat}`} className="flex-1">
//                   <div className="flex justify-between mb-1">
//                     <span>{agents[id].name}</span>
//                     <span>{agents[id].stats[stat]}/10</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div
//                       className="bg-cyan-500 h-2.5 rounded-full"
//                       style={{ width: `${agents[id].stats[stat] * 10}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }