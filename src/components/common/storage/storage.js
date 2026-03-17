import {ContactList} from '../../sections/contactos/db.js';
const LOCAL_STORAGE_KEY = 'agenda_telefonica';
const TAREAS_STORAGE_KEY = 'lista_tareas';

function saveContactsToStorage(contactos) {
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
 return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

function saveTareasToStorage(tareas) {
 localStorage.setItem(TAREAS_STORAGE_KEY, JSON.stringify(tareas));
}

function getTareasFromStorage() {
 return JSON.parse(localStorage.getItem(TAREAS_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage, TAREAS_STORAGE_KEY, getTareasFromStorage, saveTareasToStorage }; 