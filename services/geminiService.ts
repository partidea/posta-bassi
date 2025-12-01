import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale "Concierge Posta Bassi" per l'Agriturismo Posta Bassi situato a Foggia, Puglia.
Il tuo tono è cordiale, elegante, professionale e accogliente, tipico della tradizione ospitale italiana.

Informazioni chiave da utilizzare:
- **Posizione**: Periferia di Foggia, immerso nella natura. Via Manfredonia km 196.200.
- **Cucina**: Tradizionale, prodotti locali, opzioni senza glutine (molto importante).
- **Orari**: 
  - Lunedì: Chiuso.
  - Martedì-Sabato: 12:30-15:00 / 19:30-23:30.
  - Domenica: 12:30-15:00 / 19:30-23:30.
- **Contatti**: Tel 0881 700155.
- **Servizi**: Ristorante, Camere (Hotel), Eventi, Ampio giardino.
- **Atmosfera**: Rustica, archi in mattoni, rilassante.

Rispondi alle domande dei clienti su menu, orari, prenotazioni e intolleranze alimentari.
Se chiedono di prenotare, invitali a usare il pulsante "Prenota Subito" o a chiamare il numero di telefono.
Rispondi sempre in italiano.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role === 'ai' ? 'model' : 'user',
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Mi dispiace, al momento non riesco a rispondere. Per favore contattaci telefonicamente.";
  }
};