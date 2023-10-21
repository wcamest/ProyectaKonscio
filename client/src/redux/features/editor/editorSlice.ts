import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EditorState {
  
}

const initialState: EditorState = {
  
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { } = editorSlice.actions

export default editorSlice.reducer