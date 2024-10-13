import React from 'react';
import styles from './PoemCard.module.css';

type WordProps = {
  word: string;
  pinyin: string;
  abbr: string;
  explanation: string;
  source?: {
    text: string;
    book: string;
  };
  example?: {
    text: string;
    book: string;
  };
  similar?: string[];
  opposite?: string[];
  usage?: string;
};
const WordCard: React.FC<WordProps> = ({ word, pinyin, abbr, explanation, source, example, similar, opposite }) => {
  return (
    <div className={styles.wordcard}>
      <h2>{word} ({abbr})</h2>
      <p><strong>拼音:</strong> {pinyin}</p>
      <p><strong>解释:</strong> {explanation}</p>
      
      {source && (
        <div className={styles.source}>
          <p><strong>出自:</strong> "{source.text}" — {source.book}</p>
        </div>
      )}

      {example && (
        <div className={styles.example}>
          <p><strong>造句:</strong> "{example.text}" — {example.book}</p>
        </div>
      )}

      {similar && similar.length > 0 && (
        <p><strong>相似词:</strong> {similar.join(', ')}</p>
      )}

      {opposite && opposite.length > 0 && (
        <p><strong>反义词:</strong> {opposite.join(', ')}</p>
      )}
    </div>
  );
};

export default WordCard;
