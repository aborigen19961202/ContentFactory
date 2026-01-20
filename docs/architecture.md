---
title: Architecture
---

High-level architecture:
- Orchestrator: n8n workflows
- Knowledge: vector database + Data Commons Gemma
- Model layer: embeddinggemma + scenario generation API
- Optional transport: gRPC for module services

Goal: keep interfaces stable while allowing internal upgrades.