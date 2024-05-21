"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Board } from "app/components/logged/Speaking/Board";
import { Button } from "app/components/shared/Button";
import { useCreateExamplesMutation } from "app/redux/features/examplesApiSlice";
import { useEvaluatePronMutation } from "app/redux/features/evaluateApiSlice";
import { toast } from "react-toastify";
import styles from "../../../../styles/Speaking.module.scss";
import { set } from "zod";

const retryIcon = () => (
  <svg
    width="79"
    height="95"
    viewBox="0 0 79 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60.6664 5.03125L66.4059 19.8101C66.6389 20.4087 66.7517 21.0475 66.7378 21.6897C66.7238 22.332 66.5835 22.9652 66.3247 23.5531C66.0659 24.1411 65.6937 24.6723 65.2295 25.1164C64.7653 25.5604 64.2181 25.9086 63.6193 26.1411L48.8404 31.8806M18.3489 90.0036L15.0148 74.5061C14.7419 73.2387 14.9837 71.9148 15.6869 70.8256C16.3901 69.7365 17.4971 68.9712 18.7645 68.6982L34.262 65.364"
      stroke="white"
      stroke-width="10"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M63.8101 28.1944C67.4034 26.4198 68.5034 21.7803 65.5114 19.1159C59.6966 13.9377 52.4685 10.6129 44.7528 9.56736C37.037 8.52183 29.1848 9.80314 22.2016 13.2472C15.2184 16.6913 9.42218 22.1413 5.55512 28.8994C1.68807 35.6576 -0.0737716 43.4161 0.49521 51.1816C0.788539 55.1806 5.13958 57.1313 8.73285 55.3615C11.2946 54.0953 12.6243 51.2745 12.6194 48.4194C12.6051 43.3881 14.0027 38.4537 16.6534 34.1772C19.304 29.9007 23.1014 26.4537 27.6137 24.2281C32.126 22.0025 37.1723 21.0876 42.1787 21.5874C47.1852 22.0872 51.951 23.9816 55.9343 27.0553C58.2027 28.8006 61.2484 29.4557 63.8101 28.1944ZM15.2154 68.5075C17.782 67.2462 20.8278 67.9062 23.0962 69.6515C27.0795 72.7252 31.8452 74.6197 36.8517 75.1194C41.8581 75.6192 46.9044 74.7043 51.4167 72.4787C55.929 70.2531 59.7264 66.8061 62.377 62.5296C65.0277 58.2531 66.4253 53.3187 66.411 48.2874C66.4061 45.4324 67.731 42.6115 70.2976 41.3453C73.8909 39.5756 78.2419 41.5262 78.5352 45.5204C79.1031 53.2854 77.3405 61.0433 73.473 67.8006C69.6056 74.5579 63.8093 80.0071 56.8263 83.4506C49.8434 86.894 41.9916 88.1749 34.2764 87.1293C26.5611 86.0836 19.3335 82.759 13.519 77.5811C10.527 74.9216 11.627 70.2822 15.2203 68.5124L15.2154 68.5075Z"
      fill="white"
    />
  </svg>
);

const recordIcon = () => (
  <svg
    width="119"
    height="190"
    viewBox="0 0 119 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.9102 81.77V36.2C30.9102 28.6463 33.9109 21.402 39.2521 16.0607C44.5934 10.7194 51.8377 7.71875 59.3914 7.71875C66.9451 7.71875 74.1894 10.7194 79.5307 16.0607C84.872 21.402 87.8727 28.6463 87.8727 36.2V81.77C87.8727 89.3237 84.872 96.568 79.5307 101.909C74.1894 107.251 66.9451 110.251 59.3914 110.251C51.8377 110.251 44.5934 107.251 39.2521 101.909C33.9109 96.568 30.9102 89.3237 30.9102 81.77Z"
      stroke="white"
      stroke-width="15"
      stroke-linecap="round"
    />
    <path
      d="M8.125 101.982C15.1314 126.898 34.3619 141.856 59.3913 141.856M59.3913 141.856C84.4206 141.856 103.651 126.898 110.658 101.982M59.3913 141.856V181.73"
      stroke="white"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const nextIcon = () => (
  <svg
    width="79"
    height="75"
    viewBox="0 0 79 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.3113 69.5312L72.0274 39.5589C72.2725 39.3124 72.467 39.0195 72.5996 38.697C72.7323 38.3745 72.8006 38.0288 72.8006 37.6797C72.8006 37.3306 72.7323 36.9849 72.5996 36.6624C72.467 36.3399 72.2725 36.047 72.0274 35.8004L42.3113 5.82812M73.8906 37.6797H5.46875"
      stroke="white"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function PracticeSpeaking({
  params,
}: {
  params: { content: string };
}) {
  // Lists with the exercises per content (word || sentences)
  const [createExamples, { isLoading: isLoading2 }] =
    useCreateExamplesMutation();
  const [evaluatePron, { isLoading: isLoading3 }] = useEvaluatePronMutation();
  // Descomentar cuando se traigan del backend
  //const [sentences, setSentences] = useState<string[]>([]);
  const sentences = [
    "oración uno",
    "Este es un audio en formato WAV",
    "oración tres",
    "oración cuatro",
  ]; // Eliminar estas oraciones de ejemplo
  const [audios, setAudios] = useState<string[]>([]);
  // A single exercise
  const [currentSentence, setCurrentSentence] = useState<string>("");
  const [currentAudio, setCurrentAudio] = useState<string>("");
  const [correct, setCorrect] = useState<string[] | null>([]);
  const [incorrect, setIncorrect] = useState<string[] | null>([]);
  const [currentPronunciation, setCurrentPronunciation] = useState<string>("");

  const router = useRouter();

  // Recording stuff
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [chunks, setChunks] = useState<BlobPart[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [emptyAudio, setEmptyAudio] = useState<boolean>(true);
  const [recordingStopped, setRecordingStopped] = useState<boolean>(false);

  // Endpoint for creating five examples to practice (contet -> list[5 .wav audios in base64 (string)], list[sentences in string])
  // const fetchExamples = () => {
  //   createExamples({
  //     content: params.content,
  //   })
  //     .unwrap()
  //     .then((response) => {
  //       // Descomentar cuando se traigan del backend
  //       //setSentences(response[0]);
  //       setAudios(
  //         response[1].map((audio: string) => `data:audio/wav;base64,${audio}`)
  //       );
  //     })
  //     .catch((e: { data?: { detail: any } }) => {
  //       if (e.data) {
  //         toast.error(
  //           e.data.detail ||
  //             "There was an error while fetching examples, please try again"
  //         );
  //       } else {
  //         toast.error("An unexpected error occurred. Please try again.");
  //       }
  //     });
  // };

  // Endpoint for evaluating the audio created (currentPronunciation) and the sentences examples (currentSentence)
  // const evaluatePronunciation = () => {
  //   console.log("CurrentPronunciation: ", currentPronunciation);
  //   evaluatePron({
  //     audio_file_base64: currentPronunciation,
  //     target_sentence: currentSentence,
  //   })
  //     .unwrap()
  //     .then((response) => {
  //       setCorrect(response[0]);
  //       setIncorrect(response[1]);
  //     })
  //     .catch((e: { data: { detail: any } }) => {
  //       toast.error(
  //         e.data.detail ||
  //           "There was an error while fetching evaluating the pronunciation, please try again"
  //       );
  //     });
  // };

  // // Call fetchExamples in useEffect when component mounts
  // useEffect(() => {
  //   fetchExamples();
  // }, []);

  // Set initial sentence and initial audio
  useEffect(() => {
    const initialSentence = sentences.shift();
    setCurrentSentence(initialSentence || "");

    const initialAudio = audios.shift();
    setCurrentAudio(initialAudio || "");
    console.log(audioRef);
  }, []);

  useEffect(() => {
    if (chunks.length > 0) {
      const blob = new Blob(chunks, { type: "audio/wav" });
      const audioURL = window.URL.createObjectURL(blob);
      if (audioRef.current) {
        audioRef.current.src = audioURL;
      }
      // Convert audio to base64 (using FileReader)
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        if (reader.result) {
          let base64Audio = reader.result as string;
          //elimina la parte 'data:audio/wav;base64,' de base64Audio
          base64Audio = base64Audio.replace("data:audio/wav;base64,", "");
          setCurrentPronunciation(base64Audio);
        } else {
          console.error("Error converting audio to base64");
        }
      };
    }
  }, [chunks]);

  // useEffect(() => {
  //   evaluatePronunciation();
  // }, [currentPronunciation]);

  const startRecording = () => {
    setCorrect(null);
    setIncorrect(null);
    setRecordingStopped(false);
    setChunks([]);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const newMediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(newMediaRecorder);

      newMediaRecorder.start();
      setRecording(!recording);

      newMediaRecorder.ondataavailable = (e) => {
        setChunks((prev) => [...prev, e.data]);
      };

      newMediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        const audioURL = window.URL.createObjectURL(blob);
        if (audioRef.current) {
          audioRef.current.src = audioURL;
        }
      };
    });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecordingStopped(true);
      setRecording(!recording);
    }
    setEmptyAudio(false);
  };
  
  // When the record Button is clicked
  const record = () => {
    if (!recording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  // When the next Button is clicked
  const next = () => {
    const nextSentence = sentences.shift();
    if (nextSentence) {
      setCurrentSentence(nextSentence);
    } else {
      router.push("/logged/speaking/");
    }
    setCorrect(null);
    setIncorrect(null);
    setRecordingStopped(false);
    setChunks([]);
  };

  return (
    <>
      <Board
        sentence={currentSentence}
        audio={currentAudio}
        correct={correct}
        incorrect={incorrect}
      />
      <div className={styles.audio}>
        {emptyAudio? (
          <></>
        ) : (
          <audio ref={audioRef} className={styles.audioBar} controls />
        )}
      </div>
      <div className={styles.speakingButtons}>
   
        <Button
          haveIcon={true}
          isRound={true}
          Icon={recordIcon}
          onClick={record}
          isRecording={recording}
        />

        <Button haveIcon={true} isRound={true} Icon={nextIcon} onClick={next} />
      </div>
    </>
  );
}
