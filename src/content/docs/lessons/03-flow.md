---
title: 03. Diagrammi di Flusso
description: Come rappresentare algoritmi con i diagrammi di flusso
---

Un **algoritmo** è una sequenza di istruzioni per risolvere un problema.

Un **diagramma di flusso** (flowchart) è un modo per disegnare un algoritmo.

### Esempio: Mescolare un mazzo di carte

```mermaid
flowchart TD
    A([Inizio]) --> B[Prendi le carte]
    B --> C[Dividile in due metà]
    C --> D[Intreccia le carte delle due metà]
    D --> E{Il mazzo è mescolato?}
    E -->|No| C
    E -->|Sì| F([Fine])
```

**Nota:** Questo algoritmo si ripete (torna indietro) finché il mazzo non è abbastanza mescolato.

### I Nodi del Diagramma di Flusso

I diagrammi di flusso usano forme diverse per cose diverse:

#### 1. Inizio/Fine - Forma ovale/arrotondata
- Dove inizia e finisce l'algoritmo

```mermaid
flowchart LR
    A([Inizio]) --> B([Fine])
```

#### 2. Azione - Forma rettangolare
- Un passo da eseguire

```mermaid
flowchart LR
    A([Inizio]) --> B[Apri la porta]
    B --> C([Fine])
```

#### 3. Decisione - Forma a rombo
- Una domanda con risposta Sì/No
- L'algoritmo va in direzioni diverse in base alla risposta

```mermaid
flowchart LR
    A([Inizio]) --> B{Piove?}
    B -->|Sì| C[Prendi l'ombrello]
    B -->|No| D[Non serve l'ombrello]
    C --> E([Fine])
    D --> E
```

#### 4. Ciclo (Loop) - Quando una freccia torna indietro
- Ripete dei passi finché una condizione non è vera

```mermaid
flowchart LR
    A([Inizio]) --> B[Conta = 0]
    B --> C[Conta + 1]
    C --> D{Conta = 10?}
    D -->|No| C
    D -->|Sì| E([Fine])
```

---

## Esercizi

Prova a creare i diagrammi di flusso per questi algoritmi:

#### Esercizio 1: Preparare un panino
Crea un diagramma di flusso che descrive come preparare un panino.
Pensa a tutti i passi necessari: prendere il pane, spalmare il burro, aggiungere ingredienti, etc.

#### Esercizio 2: Attraversare la strada
Crea un diagramma di flusso per attraversare la strada in sicurezza.
Ricorda di includere una decisione: guardare se passano macchine!

#### Esercizio 3: Lavarsi i denti
Crea un diagramma di flusso che mostra come lavarsi i denti.
Include un ciclo: devi spazzolare per almeno 2 minuti!

#### Esercizio 4: Trovare un libro nella libreria
Crea un diagramma di flusso per trovare un libro specifico nella tua libreria.
Cosa fai se il libro non c'è? Includi questa decisione nel tuo diagramma.
