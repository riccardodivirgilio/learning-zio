# Lezione 1: Introduzione alla Programmazione

## Cos'è un computer?

**Domanda di discussione:** Secondo te, cos'è un computer?

### Cose che SONO computer:
- Smartphone
- Tablet
- Laptop
- Computer desktop
- Smart TV
- Console per videogiochi (PlayStation, Xbox, Nintendo Switch)
- Calcolatrice
- Smartwatch
- Computer dell'auto
- Robot

### Cose che NON SONO computer:
- Telecomando della TV
- Sveglia digitale
- Lampadina LED
- Spazzolino elettrico
- Forno a microonde
- Ventilatore elettrico
- Termometro digitale
- Caricabatterie

### La Differenza Principale

**Un computer può essere programmato** - puoi insegnargli a fare cose nuove.

**Altri dispositivi elettronici** possono fare solo ciò per cui sono stati costruiti.

Esempio: Una calcolatrice può fare solo calcoli matematici. Un computer può fare calcoli matematici E giocare E modificare video E qualsiasi altra cosa per cui lo programmi.

---

## Algoritmi e Diagrammi di Flusso

Un **algoritmo** è una sequenza di istruzioni per risolvere un problema.

Un **diagramma di flusso** (flowchart) è un modo per disegnare un algoritmo.

### Esempio 1: Mescolare un mazzo di carte

```mermaid
flowchart TD
    A[Inizio] --> B[Prendi il mazzo di carte]
    B --> C[Dividi il mazzo in due metà]
    C --> D[Intreccia le carte delle due metà]
    D --> E{Il mazzo è abbastanza mescolato?}
    E -->|No| C
    E -->|Sì| F[Fine]
```

**Nota:** Questo algoritmo si ripete (torna indietro) finché il mazzo non è abbastanza mescolato.

### I Nodi del Diagramma di Flusso

I diagrammi di flusso usano forme diverse per cose diverse:

#### 1. Inizio/Fine - Forma rettangolare `[...]`
- Dove inizia e finisce l'algoritmo

```mermaid
flowchart TD
    A[Inizio] --> B[Fine]
```

#### 2. Azione - Forma rettangolare `[...]`
- Un passo da eseguire

```mermaid
flowchart TD
    A[Inizio] --> B[Apri la porta]
    B --> C[Fine]
```

#### 3. Decisione - Forma a rombo `{...}`
- Una domanda con risposta Sì/No
- L'algoritmo va in direzioni diverse in base alla risposta

```mermaid
flowchart TD
    A[Inizio] --> B{Piove?}
    B -->|Sì| C[Prendi l'ombrello]
    B -->|No| D[Non serve l'ombrello]
    C --> E[Fine]
    D --> E
```

#### 4. Ciclo (Loop) - Quando una freccia torna indietro
- Ripete dei passi finché una condizione non è vera

```mermaid
flowchart TD
    A[Inizio] --> B[Conta = 0]
    B --> C[Conta + 1]
    C --> D{Conta = 10?}
    D -->|No| C
    D -->|Sì| E[Fine]
```
