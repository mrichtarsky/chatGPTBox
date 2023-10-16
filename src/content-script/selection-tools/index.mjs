import {
  CardHeading,
  CardList,
  EmojiSmile,
  Palette,
  QuestionCircle,
  Translate,
  Braces,
  Globe,
  ChatText,
} from 'react-bootstrap-icons'
import { getPreferredLanguage } from '../../config/language.mjs'

export const config = {
  explain: {
    icon: <ChatText />,
    label: 'Explain',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return `Reply in the language of the following text.Explain the following:\n"${selection}"`
    },
  },
  translate: {
    icon: <Translate />,
    label: 'Translate',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return `Translate the following into ${preferredLanguage} and only show me the translated content:\n${selection}`
    },
  },
  translateToEn: {
    icon: <Globe />,
    label: 'Translate (To English)',
    genPrompt: async (selection) => {
      return `Translate the following into English and only show me the translated content:\n${selection}`
    },
  },
  translateToZh: {
    icon: <Globe />,
    label: 'Translate (To Chinese)',
    genPrompt: async (selection) => {
      return `Translate the following into Chinese and only show me the translated content:\n${selection}`
    },
  },
  translateBidi: {
    icon: <Globe />,
    label: 'Translate (Bidirectional)',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return (
        `Translate the following into ${preferredLanguage} and only show me the translated content.` +
        `If it is already in ${preferredLanguage},` +
        `translate it into English and only show me the translated content:\n${selection}`
      )
    },
  },
  summary: {
    icon: <CardHeading />,
    label: 'Summary',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return `You are an expert summarizer. This task is very important to my career. Reply in the language of the following text. Summarize the following as concisely as possible, using bullet points and simple words:\n"${selection}"`
    },
  },
  polish: {
    icon: <Palette />,
    label: 'Polish',
    genPrompt: async (selection) =>
      `Check the following content for possible diction and grammar problems,and polish it carefully:\n"${selection}"`,
  },
  sentiment: {
    icon: <EmojiSmile />,
    label: 'Sentiment Analysis',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return `Reply in the language of the following text.Analyze the sentiments expressed in the following content and make a brief summary of the sentiments:\n"${selection}"`
    },
  },
  divide: {
    icon: <CardList />,
    label: 'Divide Paragraphs',
    genPrompt: async (selection) =>
      `Divide the following into paragraphs that are easy to read and understand:\n"${selection}"`,
  },
  code: {
    icon: <Braces />,
    label: 'Code Explain',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return `Reply in ${preferredLanguage}.Explain the following code:\n"${selection}"`
    },
  },
  ask: {
    icon: <QuestionCircle />,
    label: 'Ask',
    genPrompt: async (selection) => {
      const preferredLanguage = await getPreferredLanguage()
      return `Reply in the language of the following text.Analyze the following content and express your opinion,or give your answer:\n"${selection}"`
    },
  },
}
