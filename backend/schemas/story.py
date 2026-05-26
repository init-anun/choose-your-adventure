from typing import List, Optional, Dict
from datetime import datetime
from pydantic import BaseModel

class StoryOptionsSchema(BaseModel):
    """Schema for story options."""
    text: str 
    node_id: Optional[str] = None

class StoryNode(BaseModel):
    """Base schema for a story node."""
    content: str
    is_ending: bool = False
    is_winning_ending: bool = False

class CompleteStoryNodeResponse(StoryNode):
    """Schema for a complete story node response."""
    id: str
    options: List[StoryOptionsSchema] = []

    class Config:
        from_attributes = True

class StoryBase(BaseModel):
    """Base schema for a story."""
    title: str
    session_id: Optional[str] = None

    class Config:
        from_attributes = True

class CreateStoryRequest(BaseModel):
    """Schema for creating a story."""
    theme: str

class CreateStoryResponse(StoryBase):
    """Schema for a complete story response."""
    id: str
    created_at: datetime
    root_node: CompleteStoryNodeResponse
    all_nodes: Dict[str, CompleteStoryNodeResponse]

    class Config:
        from_attributes = True

class CompleteStoryResponse(StoryBase):
    id: int
    created_at: datetime
    root_node: CompleteStoryNodeResponse
    all_nodes: Dict[int, CompleteStoryNodeResponse]

    class Config:
        from_attributes = True