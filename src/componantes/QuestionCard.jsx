// // const QuestionCard = ({
// //   question,
// //   selectedAnswer,
// //   onAnswerSelect,
// //   onNext,
// //   onBackToTopics,
// //   isLastQuestion,
// //   onSkip,  
// //   onClearResponse,
// //   onPrev
// // }) => {
// //   console.log("QuestionCard rendered with question:", question);
// //   console.log("QuestionCard rendered with selectedAnswer:", selectedAnswer);
  
// //   return (
// //      <div className="bg-white rounded-3 shadow p-4">
// //       <div className="mb-4">
// //         <h3 className="h5 fw-semibold text-dark mb-4">{question.question}</h3>

// //         <div className="d-flex flex-column gap-3">
// //           {question.options.map((option, index) => {
// //             const isSelected = selectedAnswer === index;
// //             return (
// //               <button
// //                 key={index}
// //                 onClick={() => onAnswerSelect(index)}
// //                 className={`w-100 text-start p-3 rounded-3 border border-2 ${
// //                   isSelected
// //                     ? "border-primary bg-primary-subtle text-primary fw-medium"
// //                     : "border-secondary-subtle bg-light"
// //                 }`}
// //               >
// //                 <div className="d-flex align-items-center">
// //                   <div
// //                     className={`rounded-circle border border-2 me-3 d-flex align-items-center justify-content-center`}
// //                     style={{
// //                       width: "1.5rem",
// //                       height: "1.5rem",
// //                       backgroundColor: isSelected ? "#0d6efd" : "transparent",
// //                       borderColor: isSelected ? "#0d6efd" : "#ccc"
// //                     }}
// //                   >
// //                     {isSelected && (
// //                       <div
// //                         className="rounded-circle"
// //                         style={{
// //                           width: "0.5rem",
// //                           height: "0.5rem",
// //                           backgroundColor: "white"
// //                         }}
// //                       ></div>
// //                     )}
// //                   </div>
// //                   <span className="fw-medium">
// //                     {String.fromCharCode(65 + index)}. {option}
// //                   </span>
// //                 </div>
// //               </button>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       <div className="d-flex justify-content-between mt-4">
// //         <button
// //           onClick={onBackToTopics}
// //           className="btn btn-secondary px-4 py-2 fw-semibold"
// //         >
// //           Back to Topics
// //         </button>

// //         <div className="d-flex gap-2">
// //           {/* ✅ Clear Response Button */}
// //           <button
// //             onClick={onClearResponse}
// //             disabled={selectedAnswer === undefined}
// //             className="btn btn-warning px-4 py-2 fw-semibold"
// //           >
// //             Clear Response
// //           </button>

// //           {/* ✅ Skip button */}
// //           <button
// //             onClick={onSkip}
// //             className="btn btn-outline-secondary px-4 py-2 fw-semibold"
// //           >
// //             Skip
// //           </button>
// //           <button
// //             onClick={onPrev}
// //             className="btn btn-outline-secondary px-4 py-2 fw-semibold"
// //           >
// //             Previous
// //           </button>

// //           <button
// //             onClick={onNext}
// //             disabled={selectedAnswer === undefined}
// //             className={`btn px-4 py-2 fw-semibold ${
// //               selectedAnswer !== undefined
// //                 ? "btn-primary"
// //                 : "btn-secondary disabled"
// //             }`}
// //           >
// //             {isLastQuestion ? "Finish Test" : "Next Question"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default QuestionCard;
// const QuestionCard = ({
//   question,
//   selectedAnswer,
//   onAnswerSelect,
//   onNext,
//   onBackToTopics,
//   isLastQuestion,
//   onSkip,
//   onClearResponse,
//   onPrev
// }) => {
//   console.log("QuestionCard rendered with question:", question);
//   console.log("QuestionCard rendered with selectedAnswer:", selectedAnswer);

//   return (
//     <div className="bg-white rounded-3 shadow p-4">
//       <div className="mb-4">
//         <h3 className="h5 fw-semibold text-dark mb-4 text-center text-md-start">
//           {question.question}
//         </h3>

//         {/* ✅ Options */}
//         <div className="d-flex flex-column gap-3">
//           {question.options.map((option, index) => {
//             const isSelected = selectedAnswer === index;
//             return (
//               <button
//                 key={index}
//                 onClick={() => onAnswerSelect(index)}
//                 className={`w-100 text-start p-3 rounded-3 border border-2 ${
//                   isSelected
//                     ? "border-primary bg-primary-subtle text-primary fw-medium"
//                     : "border-secondary-subtle bg-light"
//                 }`}
//               >
//                 <div className="d-flex align-items-center">
//                   <div
//                     className="rounded-circle border border-2 me-3 d-flex align-items-center justify-content-center"
//                     style={{
//                       width: "1.5rem",
//                       height: "1.5rem",
//                       backgroundColor: isSelected ? "#0d6efd" : "transparent",
//                       borderColor: isSelected ? "#0d6efd" : "#ccc"
//                     }}
//                   >
//                     {isSelected && (
//                       <div
//                         className="rounded-circle"
//                         style={{
//                           width: "0.5rem",
//                           height: "0.5rem",
//                           backgroundColor: "white"
//                         }}
//                       ></div>
//                     )}
//                   </div>
//                   <span className="fw-medium">
//                     {String.fromCharCode(65 + index)}. {option}
//                   </span>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* ✅ Responsive Buttons */}
//       <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mt-4">
//         <button
//           onClick={onBackToTopics}
//           className="btn btn-secondary px-4 py-2 fw-semibold w-100 w-md-auto"
//         >
//           Back to Topics
//         </button>

//         <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-end w-100">
//           <button
//             onClick={onClearResponse}
//             disabled={selectedAnswer === undefined}
//             className="btn btn-warning px-4 py-2 fw-semibold"
//           >
//             Clear Response
//           </button>

//           <button
//             onClick={onSkip}
//             className="btn btn-outline-secondary px-4 py-2 fw-semibold"
//           >
//             Skip
//           </button>

//           <button
//             onClick={onPrev}
//             className="btn btn-outline-secondary px-4 py-2 fw-semibold"
//           >
//             Previous
//           </button>

//           <button
//             onClick={onNext}
//             disabled={selectedAnswer === undefined}
//             className={`btn px-4 py-2 fw-semibold ${
//               selectedAnswer !== undefined
//                 ? "btn-primary"
//                 : "btn-secondary disabled"
//             }`}
//           >
//             {isLastQuestion ? "Finish Test" : "Next Question"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;
const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onBackToTopics,
  isLastQuestion,
  onSkip,
  onClearResponse,
  onPrev
}) => {
  return (
    <div className="bg-white rounded-3 shadow p-3 p-md-4">
      <div className="mb-3 mb-md-4">
        <h3 className="h6 h-md5 fw-semibold text-dark mb-3 mb-md-4">
          {question.question}
        </h3>

        <div className="d-flex flex-column gap-2 gap-md-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`w-100 text-start p-2 p-md-3 rounded-3 border border-2 ${
                  isSelected
                    ? "border-primary bg-primary-subtle text-primary fw-medium"
                    : "border-secondary-subtle bg-light"
                }`}
              >
                <div className="d-flex align-items-center">
                  <div
                    className={`rounded-circle border border-2 me-2 me-md-3 d-flex align-items-center justify-content-center`}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: isSelected ? "#0d6efd" : "transparent",
                      borderColor: isSelected ? "#0d6efd" : "#ccc"
                    }}
                  >
                    {isSelected && (
                      <div
                        className="rounded-circle"
                        style={{
                          width: "0.5rem",
                          height: "0.5rem",
                          backgroundColor: "white"
                        }}
                      ></div>
                    )}
                  </div>
                  <span className="fw-medium small small-md-normal">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ✅ Responsive buttons */}
    <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mt-3 mt-md-4">
  {/* Back button */}
  <button
    onClick={onBackToTopics}
    className="btn btn-secondary fw-semibold w-100 w-md-auto"
  >
    Back to Topics
  </button>

  {/* Action buttons */}
  <div className="d-grid gap-2 w-100 w-md-auto" style={{ gridTemplateColumns: "1fr 1fr" }}>
    <button
      onClick={onClearResponse}
      disabled={selectedAnswer === undefined}
      className="btn btn-warning fw-semibold"
    >
      Clear Response
    </button>

    <button
      onClick={onSkip}
      className="btn btn-outline-secondary fw-semibold"
    >
      Skip
    </button>

    <button
      onClick={onPrev}
      className="btn btn-outline-secondary fw-semibold"
    >
      Previous
    </button>

    <button
      onClick={onNext}
      disabled={selectedAnswer === undefined}
      className={`btn fw-semibold ${
        selectedAnswer !== undefined ? "btn-primary" : "btn-secondary disabled"
      }`}
    >
      {isLastQuestion ? "Finish Test" : "Next Question"}
    </button>
  </div>
</div>

    </div>
  );
};

export default QuestionCard;
