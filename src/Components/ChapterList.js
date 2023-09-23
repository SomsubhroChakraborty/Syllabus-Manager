// import React, { useState } from 'react';

// export default function ChapterList({ folder, selectedChapter }) {
//   const [chapters, setChapters] = useState([]);
//   const [newChapterName, setNewChapterName] = useState('');

//   const addChapter = () => {
//     if (newChapterName.trim() !== '') {
//       setChapters([...chapters, { name: newChapterName, notes: [] }]);
//       setNewChapterName('');
//     }
//   };

//   return (
//     <div>
//       <div className="input_section">
//         <input
//           type="text"
//           placeholder="New Chapter Name"
//           value={newChapterName}
//           onChange={(e) => setNewChapterName(e.target.value)}
//         />
//         <button onClick={addChapter}>Create Chapter</button>
//       </div>
//       <ul>
//         {chapters.map((chapter, index) => (
//           <li key={index}>
//             <div className="folder-item">
//               <button
//                 className="folder-button"
//                 onClick={() => setSelectedChapter(chapter)}
//               >
//                 {chapter.name}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
