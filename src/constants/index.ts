import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

export const INIT_CODE_HASH: string = '0x6be983fca8cd114a38e7c87a92f0bf4c13f5e8e006242d62f7277ca478e65ffe'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
