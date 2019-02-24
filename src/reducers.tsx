import { Block, State } from "./types"

export interface Message {
  user: string
  message: string
  timestamp: number
}

export const SEND_MESSAGE = "SEND_MESSAGE"

interface SomeAction {
  type: typeof SEND_MESSAGE
  payload: object
}

const initialSpec = `
rv sam:
  repeat 100:
    data: red, green
    choice
`
const initialBlocks: Block[] = [
  {
    fn: "rv",
    args: ["sam"],
    body: [
      {
        fn: "repeat",
        args: [100],
        body: [
          {
            fn: "data",
            args: ["red", "green"],
            body: [],
          },
          {
            fn: "choice",
            args: [],
            body: [],
          },
        ],
      },
    ],
  },
]

const appReducer = (
  state = { blocks: initialBlocks, spec: initialSpec },
  action: SomeAction,
): State => {
  return state
}

export default appReducer
